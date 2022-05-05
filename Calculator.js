import { LightningElement } from 'lwc';
export default class LWCCalculator extends LightningElement {

 firstNumber;
 secondNumber;
 calculation;
 isSum = false;
 isSub = false;;
 isMulti = false;
 isDivision = false;
 

 changeFirst(event)
 {
    console.log(event.target.value);
    
    this.firstNumber=event.target.value;
 }
 changeSecond(event)
 {
   console.log(event.target.value);
    
    this.secondNumber=event.target.value;   
 }
 addTwoNumbers(event)
 {
     const calc = parseInt(this.firstNumber)+parseInt(this.secondNumber);
      this.calculation = calc;
      this.isSum = true;
      this.isSub = false;
      this.isMulti= false;
      this.isDivision=false;
       
 }

subtractTwoNumbers(event)
 {
     const calc = parseInt(this.firstNumber)-parseInt(this.secondNumber);
      this.calculation = calc;
      this.isSum = false;
      this.isSub = true;
      this.isMulti= false;
      this.isDivision=false;
      
 }
 multiplyTwoNumbers(event)
 {
     const calc = parseInt(this.firstNumber)*parseInt(this.secondNumber);
      this.calculation = calc;
      this.isSum = false;
      this.isSub = false;
      this.isMulti= true;
      this.isDivision=false;
       
 }
 divideTwoNumbers(event)
 {
     const calc = parseInt(this.firstNumber)/parseInt(this.secondNumber);
      this.calculation = calc;
      this.isSum = false;
      this.isSub = false;
      this.isMulti= false;
      this.isDivision=true;
       
 }
}
