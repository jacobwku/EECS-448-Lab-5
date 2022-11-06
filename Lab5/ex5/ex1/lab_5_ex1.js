function validate()
{
    var input1=document.getElementById("field1").value;
    var input2=document.getElementById("field2").value;
    
    if((input1==input2)&&(input1.length>=8))
    {
        alert("Password Validated");
    }

    else if(input1!=input2)
    {
        alert("Password Incorrect");
    }
    
    else if(input1.length<8)
    {
        alert("Password Is Too Short");
    }
}
