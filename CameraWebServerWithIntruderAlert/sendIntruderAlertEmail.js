module.exports = async function (context, myBlob) {
  
  context.log("Started sending email");

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
  
     var emailMessage = {
         "personalizations": [ { "to": [ { "email": "to email address" } ] } ],
        from: { email: "from email address" },
        subject: "Home security camera intruder alert",
        content: [{
            type: 'text/html',
            value: "Here is the photo !\n"
        }],
        attachments: [
    {
      content: new Buffer(myBlob).toString('base64'),
      filename: timeStamp+'.jpg',
      type: 'image/jpg',
      disposition: 'attachment',
      contentId: 'mytext'
    }]
  
    };
  
  context.bindings.emailtoOwner=emailMessage

  context.done();

};
