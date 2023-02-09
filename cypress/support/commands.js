// Cypress.Commands.add('login', () => {
//     cy.visit('https://teamplus.udyamo.com');
//     const request = {
//         method: 'POST',
//         url: 'https://q9qll5ylu9.execute-api.us-east-1.amazonaws.com/dev/token',
//         body: {
//             secret: 'dEhpc0lzbXkkRWNSMytrRXlGT1J0ZUFtcExVc0B1dGgzTishKGFUaTBu',
//             source: 'slack',
//             user: 'U04M8R3DJ23',
//             token: 'xoxp-4737277074979-4722853460071-4761092906016-d4a23da00c6847ca3e63b9826c9969bd',
//         },
//     }
//     cy.request(request).then((data) => {
//         console.log(data.body);
//         window.localStorage.setItem('token', data.body.token)
//         window.localStorage.setItem('refreshToken', data.body.refresh_token)
//     })
//     cy.visit('https://teamplus.udyamo.com/slackRegistration');
//     cy.visit('https://teamplus.udyamo.com/myorganizationsslack');
//     cy.visit('https://teamplus.udyamo.com/fetchData');
//     cy.visit('https://teamplus.udyamo.com/dashboard');
// })



// Cypress.Commands.add('login', () => {
//     cy.visit('https://teamplus.udyamo.com');
//     // cy.get('.react-slack-login-img').click();
//     cy.contains('Sign in with Microsoft').click();
//     cy.wait(1000)
//     cy.origin('https://login.microsoftonline.com/', () => {
//         cy.get('input[type="email"]').type("username");
//         //   cy.get('input[type="submit"]').click()
//     }
//   )

    // cy.origin('https://slack.com/workspace-signin?redir=%2Foauth%3Fclient_id%3D1290316667744.4507395671634%26scope%3D%26user_scope%3Dusers%253Aread%252Cchannels%253Aread%252Cgroups%253Aread%252Cusers%253Aread.email%26redirect_uri%3Dhttps%253A%252F%252Fteamplus.udyamo.com%26state%3D%26granular_bot_scope%3D1%26single_channel%3D0%26install_redirect%3D%26tracked%3D1%26team%3D', () => {
    //     cy.contains('Sign in to your workspace')
    // })
// })
