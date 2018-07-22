module.exports = function (request, response) {
    response.json({loanNumber:Math.floor(Math.random()*90000) + 10000})
    
}