
let request=require("sync-request");
let assert=require("assert");
let path=require("path");
let config=require("../utils/comman");
let fs=require("fs"),res;
let request_body=fs.readFileSync("test/requestbody.json");
console.log('url is'+config.smartapi_url);

describe('SA_01 : Set up a running backend service to handle the user request',function()
{
it('test1 : when valid "question" and "employee_email" is provided then it should return 200 OK',function(done)
{   
    console.log(JSON.parse(request_body)["SA_01"]["test1"]);
    res = request('POST', config.smartapi_url,{json:JSON.parse(request_body)["SA_01"]["test1"]});
    assert.equal(res.statusCode,200);
    done();

});
it('test2:invalid "employee_email should return 400" ',function(done)
{
    console.log(JSON.parse(request_body)["SA_01"]["test2"]);
    res = request('POST', config.smartapi_url,{json:JSON.parse(request_body)["SA_01"].test2});
    assert.equal(res.statusCode,400);
    done();

}
);
});

describe('SA_02 : Add NLP module to process the Natural Language and understand what "Data Type" the user was asking',function()
{
it('test2 : If input is not understood, return an "Error Message" to the server ',function(done)
{   
    console.log(JSON.parse(request_body)["SA_02"]["test2"]);
    res = request('POST', config.smartapi_url,{json:JSON.parse(request_body)["SA_01"]["test1"]});
    assert.equal(res.statusCode,200);
    assert.equal(JSON.parse(res.body).answer,"I am not sure, I am still learning");
    done();
});

});


describe('SA_03 : Create Zoom API server',function()
{
it('test1 :Valid request to Zoom API should respond with corresponding data',function(done)
{   
    console.log(JSON.parse(request_body)["SA_03"]["test1"]);
    res = request('POST', config.zoomapi_url,{json:JSON.parse(request_body)["SA_03"]["test1"]});
    assert.equal(res.statusCode,200);
    assert.equal(JSON.parse(res.body).hasOwnProperty('answer'),true);
    assert.match(JSON.parse(res.body).answer,/(Zoom)|(meetings)/);
        done();
});
}); 

describe('SA_04 : Create Zoom API server',function()
{
it('test1 :Valid request to Zoom API should respond with corresponding data',function(done)
{   
    console.log(JSON.parse(request_body)["SA_03"]["test1"]);
    res = request('POST', config.zoomapi_url,{json:JSON.parse(request_body)["SA_03"]["test1"]});
    assert.equal(res.statusCode,200);
    assert.equal(JSON.parse(res.body).hasOwnProperty('answer'),true);
    assert.match(JSON.parse(res.body).answer,/(Zoom)|(meetings)/);
        done();
});
}); 

describe.only('SA_04 : Create People API server',function()
{
it('test1 :Valid request to Create People API should respond with corresponding data',function(done)
{   
    console.log(JSON.parse(request_body)["SA_04"]["test1"]);
    res = request('POST', config.peopledata_url,{json:JSON.parse(request_body)["SA_04"]["test1"]});
    assert.equal(res.statusCode,200);
    assert.equal(JSON.parse(res.body).hasOwnProperty('answer'),true);
    assert.match(JSON.parse(res.body).answer,/(?=.*?\bmonth\b)(?=.*?\bSalary\b)/);
    done();
});
}); 