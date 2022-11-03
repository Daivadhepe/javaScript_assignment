console.warn(`----create the class "bank" with all possible data members--------` );
class bank{
    constructor(bank_name,account_no,bank_city,bank_location ,interest_rate,ifsc_code,){ 
        this.bank_name=bank_name,
        this.account_no=account_no,
        this.bank_city=bank_city,
        this.bank_location=bank_location,
        this.interest_rate=interest_rate,
        this.ifsc_code=ifsc_code
    }
        
    
}

let axis_bank= new bank ("Axis Bank",2546876589,"sangola","near shivaji complex",11.02,"AXIS456987");
let sbi_bank = new bank ( "SBI Bank",2365478923,"Pune","near sakhubai garden",12.12,"SBI547896");
let icici_bank = new bank ("ICICI Bank",2365478956,"Mumbai","near shivaji park",15.09,"ICI789654");
let kotak_bank= new bank("KOTAK Bank",2365478965,"Nagpur","near VIP Road",11.17,"KOT523647");
let hdfc_bank = new bank( "HDFC Bank",2365478965,"Narsi","near balaji temple",17.02,"HDFC45200");
let punjab_bank= new bank( "Panjabi Bank",2365478936,"Nanded","near Ambedkar chok",09.15,"PAN456987");
let array = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank];

console.warn("--------print all bank object bank name and location--------");
for(const iterator of array){
    console.log(`bank name : ${iterator.bank_name},location : ${ iterator.bank_location}`);
}
console.warn("------find the object kotak bank using for of loop ----------------------------");
for (const iterator of array) {
    if ( iterator.bank_name=="KOTAK Bank") {
        console.log(`${iterator.bank_name},${iterator.account_no},${iterator.bank_city},${iterator.bank_location},${iterator.ifsc_code}`);
    }
}
