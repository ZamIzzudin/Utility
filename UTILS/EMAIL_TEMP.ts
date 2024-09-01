/** @format */

const header_url =
  "https://yt3.googleusercontent.com/ElR0rx02MWJYhihkQVNw-YxiCZRyOwDbVDV9q2wuEEsGeCx7vrLoq6RE3mf9R_pFgTZdLYCr=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj";

const template_new_task = (data: any) => {
  const config = {
    from: {
      name: "New Task Assigned",
      address: "senangceria202@gmail.com",
    }, // sender address
    to: [data.receiver], // list of receivers
    subject: "Notification Reminder", // Subject line
    html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tender Status Update</title>
                <style>
                      body {
                    font-family: Roboto, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px 10px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                .header,.footer {
                    background-color: #fff;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
        
                .header img{
                    width: 100%;
                    height: auto;
                }
                .footer img{
                  border-radius:100%;
                    width: 15%;
                    height: auto;
                }
                  
                  .cta-container{
                    width:100%;
                    display:flex;
                    
                  }
        
                .cta {
                    width: fit-content;
                    margin: auto;
                    display: block;
                }
        
                .cta button {
                    background-color: #eb0028;
                    border: none;
                    padding: 14px 52px;
                    color: white;
                    font-size: 1em;
                    border-radius: 100px;
                }
                  
                  .center{
                    text-align:center;
                    color: #eb0028;
                  }
                  
                  .content{
                    padding:0 5%;
                  }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                      <img src="${header_url}">
                    </div>
                    <div class="content">
                       <h1 class="center">New Task Assigned</h1>
                       <p>Hello ${data.name},</p>
                      <p>You have been assigned a new task. Here are the details:</p>
                      <div class="task-detail">
                          <p><strong>Title:</strong> ${data.title}</p>
                          <p><strong>Status:</strong> ${data.status}</p>
                          <p><strong>Type:</strong> ${data.type}</p>
                      </div>
                      <p>Please click the button below to view the task:</p>
                      <div class="cta-container">
                         <a class="cta" href="${data.redirect}">
                              <button>View Task</button>
                             </a>
                        <div>
                    </div>
                </div>
            </body>
            </html>`, // html body,
  };

  return config;
};

const template_revision_task = (data: any) => {
  const config = {
    from: {
      name: "Revision Request",
      address: "senangceria202@gmail.com",
    }, // sender address
    to: [data.receiver], // list of receivers
    subject: "Notification Reminder", // Subject line
    html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tender Status Update</title>
                <style>
                      body {
                    font-family: Roboto, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px 10px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                .header,.footer {
                    background-color: #fff;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
        
                .header img{
                    width: 100%;
                    height: auto;
                }
                .footer img{
                  border-radius:100%;
                    width: 15%;
                    height: auto;
                }
                  
                  .cta-container{
                    width:100%;
                    display:flex;
                    
                  }
        
                .cta {
                    width: fit-content;
                    margin: auto;
                    display: block;
                }
        
                .cta button {
                    background-color: #eb0028;
                    border: none;
                    padding: 14px 52px;
                    color: white;
                    font-size: 1em;
                    border-radius: 100px;
                }
                  
                  .center{
                    text-align:center;
                    color: #eb0028;
                  }
                  
                  .content{
                    padding:0 5%;
                  }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                      <img src="${header_url}">
                    </div>
                    <div class="content">
                       <h1 class="center">Revision Request</h1>
                       <p>Hello ${data.name},</p>
                      <p>You have a revision request about your task. Here are the details:</p>
                      <div class="task-detail">
                          <p><strong>Title:</strong> ${data.title}</p>
                          <p><strong>Status:</strong> ${data.status}</p>
                          <p><strong>Type:</strong> ${data.type}</p>
                      </div>
                      <p>Please click the button below to view the task:</p>
                      <div class="cta-container">
                         <a class="cta" href="${data.redirect}">
                              <button>View Task</button>
                             </a>
                        <div>
                    </div>
                </div>
            </body>
            </html>`, // html body,
  };

  return config;
};

const template_reassigned_task = (data: any) => {
  const config = {
    from: {
      name: "Revision Request Done",
      address: "senangceria202@gmail.com",
    }, // sender address
    to: [data.receiver], // list of receivers
    subject: "Notification Reminder", // Subject line
    html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Tender Status Update</title>
                <style>
                      body {
                    font-family: Roboto, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px 10px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                .header,.footer {
                    background-color: #fff;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }
        
                .header img{
                    width: 100%;
                    height: auto;
                }
                .footer img{
                  border-radius:100%;
                    width: 15%;
                    height: auto;
                }
                  
                  .cta-container{
                    width:100%;
                    display:flex;
                    
                  }
        
                .cta {
                    width: fit-content;
                    margin: auto;
                    display: block;
                }
        
                .cta button {
                    background-color: #eb0028;
                    border: none;
                    padding: 14px 52px;
                    color: white;
                    font-size: 1em;
                    border-radius: 100px;
                }
                  
                  .center{
                    text-align:center;
                    color: #eb0028;
                  }
                  
                  .content{
                    padding:0 5%;
                  }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                      <img src="${header_url}">
                    </div>
                    <div class="content">
                       <h1 class="center">Revision Already Done</h1>
                       <p>Hello ${data.name},</p>
                      <p>You revision request already done. Here are the details:</p>
                      <div class="task-detail">
                          <p><strong>Title:</strong> ${data.title}</p>
                          <p><strong>Status:</strong> ${data.status}</p>
                          <p><strong>Type:</strong> ${data.type}</p>
                      </div>
                      <p>Please click the button below to view the task:</p>
                      <div class="cta-container">
                         <a class="cta" href="${data.redirect}">
                              <button>View Task</button>
                             </a>
                        <div>
                    </div>
                </div>
            </body>
            </html>`, // html body,
  };

  return config;
};

const mail_template = {
  template_new_task,
  template_revision_task,
  template_reassigned_task,
};

export default mail_template;
