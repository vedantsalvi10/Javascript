
let n = 0;
document.querySelector('button')
        .addEventListener('click',sham());


        function sham(){
          
          this.name = "ram";
          this.email = "email";
          this.password = "pas";
          console.log(this.name);
          n+=1;
          console.log(n);
        }
        