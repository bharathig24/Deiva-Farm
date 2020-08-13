module.exports = {
    login: 'SELECT UserName, MailId, Password FROM user WHERE MailId = ?',
    register: 'INSERT INTO user (UserName, MailId, Password) VALUES (?,?,?)'
}