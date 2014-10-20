 $(document).on('pagecreate',function(){
        //Defining Application Name
        var ToDoL={};
        (function(app){
            var appName="To Do L",
            version="1.0";
            app.bindings=function(){
                $('#todoadderokbtn').click(function(){
                    //eve.preventDefault();
                    //Saving the Note
                    alert("Testing");
                    app.addtodolist($('#todotitle').val(),$('#tododesc').val());
                });
             }; 
             app.addtodolist=function(title,tdo){
                var todols=localStorage['ToDoL'];
                if (todols==undefined||todols=" ") {
                    var todolsObj={};
                }
                else{
                    var todolsObj=JSON.parse(todols);
                    todolsObj[title.replace(/ /g,'-')]=tdo;
                    localStorage['ToDoL']=JSON.stringify(todolsObj);
                    $('#todotitle').val()=' ';
                    $('#tododesc').val()=' ';
                }
             };   
            app.init=function(){
                app.bindings();
            };            
            app.init();
        })(ToDoL);            
    });    