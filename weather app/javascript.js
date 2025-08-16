class Solution{
  constructor(a,b){
    this.a=a;
    this.b=b;
  this.  c=a+b;
    
  }
  add(){
   
    console.log(`in sol class  ${this.c}`);
  }
  
}
class Solution2 extends Solution{
  constructor(a,b){
     a=this.a;
    b=this.b;
   
  }
  add(){
     console.log(`in sol2 class  ${a+b}`);
  }
}
sol=new Solution(10,2)  ;
sol.add();
