// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma abicoder v2;
contract realEstate {
	// Declare state variables in this section

	uint8 public avgBlockTime;                          
	uint8 private decimals;                             
	uint8 public tax;                               	
	uint8 public rentalLimitMonths;                     
	uint256 public rentalLimitBlocks;                   
	uint256 constant private MAX_UINT256 = 2**256 - 1;  
	uint256 public totalSupply;                         
	uint256 public totalSupply2;                        
	uint256 public rentPer30Day;                        
	uint256 public accumulated;                         
	uint256 public blocksPer30Day;                      
	uint256 public rentalBegin;                         
	uint256 public occupiedUntill;                      
	uint256 private _taxdeduct;                         
	uint256[] public number;
	uint256[] public price;
	address[] public addressArray;
	string public name;                                 
	string public symbol;                               

	address public gov = msg.sender;    	            
	address public mainPropertyOwner;                   
	address public tenant = 0x54473c28AE7Ac58aEA1945A1671e40FAa6840A27;                              

	address[] public stakeholders;                      
	mapping (address => uint256) public revenues;       
	mapping (address => uint256) public shares;         
	mapping (address => mapping (address => uint256)) private allowed;   
	mapping (address => uint256) public rentpaidUntill; 
	mapping (address => uint256) public sharesOffered;  
        mapping (address => uint256) public shareSellPrice; 


	event ShareTransfer(address indexed from, address indexed to, uint256 shares);
	event Seizure(address indexed seizedfrom, address indexed to, uint256 shares);
	event ChangedTax(uint256 NewTax);
	event MainPropertyOwner(address NewMainPropertyOwner);
	event NewStakeHolder(address StakeholderAdded);
	event CurrentlyEligibletoPayRent(address Tenant);
	event PrePayRentLimit (uint8 Months);
	event AvgBlockTimeChangedTo(uint8 s);
	event RentPer30DaySetTo (uint256 WEIs);
	event StakeHolderBanned (address banned);
	event RevenuesDistributed (address shareholder, uint256 gained, uint256 total);
	event Withdrawal (address shareholder, uint256 withdrawn);
	event Rental (uint256 date, address renter, uint256 rentPaid, uint256 tax, uint256 distributableRevenue, uint256 rentedFrom, uint256 rentedUntill);
	event SharesOffered(address Seller, uint256 AmmountShares, uint256 PricePerShare);
	event SharesSold(address Seller, address Buyer, uint256 SharesSold,uint256 PricePerShare);


	constructor (string memory _propertyID, string memory _propertySymbol, address _mainPropertyOwner, uint8 _tax, uint8 _avgBlockTime) {
		shares[_mainPropertyOwner] = 100;                   //one main Shareholder to be declared by government to get all initial shares.
		totalSupply = 100;                                  
		totalSupply2 = totalSupply**2;                      
		name = _propertyID;
		decimals = 0;
		symbol = _propertySymbol;
		tax = _tax;                                         
		mainPropertyOwner = _mainPropertyOwner;
		stakeholders.push(gov);                             
		stakeholders.push(mainPropertyOwner);
		allowed[mainPropertyOwner][gov] = MAX_UINT256;      
		avgBlockTime = _avgBlockTime;                       
	    	blocksPer30Day = 60*60*24*30/avgBlockTime;
	    	rentalLimitMonths = 12;                                   
	    	rentalLimitBlocks = rentalLimitMonths * blocksPer30Day;
		numberAndPrice();
	}

	// Define modifiers in this section

	modifier onlyGov{
	  require(msg.sender == gov);
	  _;
	}
	modifier onlyPropOwner{
	    require(msg.sender == mainPropertyOwner);
	    _;
	}
	modifier isMultipleOf{
	   require(msg.value % totalSupply2 == 0);              
	    _;
	}
	modifier eligibleToPayRent{                             
	    require(msg.sender == tenant);
	    _;
	}


	// Define functions in this section

//viewable functions

	function showSharesOf(address _owner) public view returns (uint256 balance) {       //shows shares for each address.
		return shares[_owner];
	}

	 function isStakeholder(address _address) public view returns(bool, uint256) {      //shows whether someone is a stakeholder.
	    for (uint256 s = 0; s < stakeholders.length; s += 1){
	        if (_address == stakeholders[s]) return (true, s);
	    }
	    return (false, 0);
	 }

	function setTax (uint8 _x) public onlyGov {                             
	   require( _x <= 100, "Valid tax rate  (0% - 100%) required" );
	   tax = _x;
	   emit ChangedTax (tax);
	}

	function SetAvgBlockTime (uint8 _sPerBlock) public onlyGov{         
	    require(_sPerBlock > 0, "Please enter a Value above 0");
	    avgBlockTime = _sPerBlock;
	    blocksPer30Day = (60*60*24*30) / avgBlockTime;
	    emit AvgBlockTimeChangedTo (avgBlockTime);
	}

   function distribute() public onlyGov {       
        uint256 _accumulated = accumulated;
        for (uint256 s = 0; s < stakeholders.length; s += 1){
            address stakeholder = stakeholders[s];
            uint256 _shares = showSharesOf(stakeholder);
            uint256 ethertoreceive = (_accumulated/(totalSupply))*_shares;
            accumulated = accumulated - ethertoreceive;
            revenues[stakeholder] = revenues[stakeholder] + ethertoreceive;
            emit RevenuesDistributed(stakeholder,ethertoreceive, revenues[stakeholder]);
        }
   }

//hybrid Governmental

	function seizureFrom(address _from, address _to, uint256 _value) public returns (bool success) {           
		uint256 allowance = allowed[_from][msg.sender];
		require(shares[_from] >= _value && allowance >= _value);
		shares[_to] += _value;
		shares[_from] -= _value;
		if (allowance < MAX_UINT256) {
			allowed[_from][msg.sender] -= _value;
		}
		emit Seizure(_from, _to, _value);
		return true;
	}


//Stakeholder functions

    function offerShares(uint256 _sharesOffered, uint256 _shareSellPrice) public{       //Stakeholder can offer # of Shares for  Price per Share
        (bool _isStakeholder, ) = isStakeholder(msg.sender);
        require(_isStakeholder);
        require(_sharesOffered <= shares[msg.sender]);
        sharesOffered[msg.sender] = _sharesOffered;
        shareSellPrice[msg.sender] = _shareSellPrice;
        emit SharesOffered(msg.sender, _sharesOffered, _shareSellPrice);
		numberAndPrice();
    }

    function buyShares (uint256 _sharesToBuy, address payable _from) public payable{    //Stakeholder can buy shares from seller for sellers price * ammount of shares
        require(msg.value == _sharesToBuy * shareSellPrice[_from] && _sharesToBuy <= sharesOffered[_from] && _sharesToBuy <= shares[_from] &&_from != msg.sender); //
        allowed[_from][msg.sender] = _sharesToBuy;
        seizureFrom(_from, msg.sender, _sharesToBuy);
        sharesOffered[_from] -= _sharesToBuy;
        _from.transfer(msg.value);
        emit SharesSold(_from, msg.sender, _sharesToBuy,shareSellPrice[_from]);
		numberAndPrice();
    }

	function transfer(address _recipient, uint256 _amount) public returns (bool) {      //transfer of Token, requires isStakeholder
	    require(shares[msg.sender] >= _amount);
	    shares[msg.sender] -= _amount;
	    shares[_recipient] += _amount;
	    emit ShareTransfer(msg.sender, _recipient, _amount);
	    return true;
	 }

	function numberAndPrice() public{
		for(uint i=0; i<stakeholders.length; i++){
			number.push(sharesOffered[stakeholders[i]]);
		}
		for(uint i=0;i<stakeholders.length;i++){
			price.push(shareSellPrice[stakeholders[i]]);
		}
		for(uint i=0;i<stakeholders.length;i++){
			addressArray.push(stakeholders[i]);
		}		
	}

	function display() public view returns (uint[] memory, uint[] memory, address[] memory){
		return (price, number, addressArray);
	}

	//falback
    	receive () external payable {                   //fallback function returns ether back to origin
        	(msg.sender).transfer(msg.value);
        }
}