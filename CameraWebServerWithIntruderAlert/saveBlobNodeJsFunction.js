module.exports = function (context, IoTHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array: ${IoTHubMessages}`);
    var base64string="";
    var imageBuffer;
     let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

var timeStamp= year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
   
    function decodeBase64Image(dataString) {   
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

        if (matches.length !== 3) {
            return new Error('Invalid input string');   
        }

        response.type = matches[1];   
        response.data = new Buffer(matches[2], 'base64');

        return response; 
    }
    IoTHubMessages.forEach(message => {
        context.log(`Processed message: ${message}`);
           base64string = message.imagebase64Value;
          //context.log(`image string is: ${base64string}`);
       
      imageBuffer  = decodeBase64Image(base64string);
    context.bindings.outputBlob = imageBuffer.data;

 context.bindings.outputBlob.name=timeStamp

    
    });
    
     
   
    
    context.done();
};


