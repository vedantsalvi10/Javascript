
let n =0;
document.querySelector('button')
        .addEventListener('click',sham());


        function sham(nam,ved,pas){
          
          this.name = nam;
          this.email = ved;
          this.password = pas;
          console.log(this.name);
          n+=1;
          console.log(n);
        }

        const na = new sham("ram", "vedant" , "234");
        console.log(na);