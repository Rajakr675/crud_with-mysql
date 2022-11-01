
let input=require("prompt-sync")();
let mysql=require("mysql")

let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"raja@123",
    database:"raja"
})
con.connect((err)=>{
    if(err)throw err;
    console.log("Database conected !.");

    function insert_table(){
        console.log("!!!!!!!! -->isert another data<-- !!!!!!!.");
        let id=parseInt( input("enter your id => "));
        let name=input("enter your name => ");
        let age=parseInt( input("enter your age => "));
        let city=input("enter your city => ")
        var data = `INSERT INTO employes (id, name, age, city) VALUES ('${id}', '${name}', '${age}', '${city}')`;  
        con.query(data, function (err, result) {  
            if (err) throw err;
            console.log("1 record inserted");  
        });  
    }
    function read_table(){
        console.log("!!!!!!!!!-->read_table<--!!!!!!!!!!\n");
        console.log("!--> what you want here<--! \npress 1).for all data show\npress 2).for specific data show");
        let choice=input("enter your choice => ")
        if(choice=="1"){
            con.query("SELECT * FROM employes",function (err,result){
                if (err) throw err;
                console.log(result);
            })
        }
        else{
            let city=input("enter your city name => ")
            con.query(`SELECT * FROM employes WHERE city= '${city}'`, function (err, result) {
              if (err) throw err;
              console.log(result);
            });
        }

    }
    function update_table(){
        console.log("!!!-->what do you want to update<--!!!\npress 1).for name\npress 2).for age\npress 3).for city");
        let choice=input("enter your choice => ")
        if(choice=="1"){
            let old_name=input("enter the old name => ");
            let new_name=input("enter the new name => ");
            con.query(`UPDATE employes SET name='${new_name}' WHERE  name='${old_name}'`,function(err,result){
                if(err) throw err;
                console.log("record updated");
            });
        }
        else if(choice=="2"){
            let old_age=input("enter the old_age => ");
            let new_age=input("enter the new_age => ");
            con.query(`UPDATE employes SET age='${new_age}' WHERE age='${old_age}'`,function (err,result){
                if(err) throw err;
                console.log("record updated");
            });
        }
        else{
            let old_city=input("enter the old_city => ");
            let new_city=input("enter the new_city => ")
            con.query(`UPDATE employes SET city='${new_city}}' WHERE age='${old_city}'`,function(err,result){
                if(err)throw err;
                console.log("record updated");
            });
        };


    }
    function delete_table(){
        let id=input("enter which id you want to delete =>  ")
        con.query(`DELETE FROM employes WHERE id = '${id}'`,function(err,result){
            if(err)throw err;
            console.log("this id table deleted.");
        })

    }
    
    console.log("press 1).for insert_table  \npress 2).for read_table \npress 3).for update_table.\npree 4).for deleted\n ");
    
    let choice=input("Enter your choice => ")
    if(choice=="1"){
        insert_table()
    }
    else if(choice=="2"){
        read_table()
    }
    else if(choice=="3"){
        update_table()
    }
    else if(choice=="4"){
        delete_table()  
    }
});

