function generateRandomNumber(num){
    return Math.floor(Math.random()*num)
}
const wisdom = {
    sign:['sun', 'moon','star','stardust'],
    fortuneOutput:['good luck','bad luck', 'terrible luck', 'great luck'],
    advice:['go out','dance','play one more time','sleep'],
}
let personalWisdom =[]
for (let prop in wisdom){
    let optionID= generateRandomNumber(wisdom[prop].length)

switch (prop){
    case 'sign':
        personalWisdom.push(`Your sign is a '${wisdom[prop][optionID]}'.`)
        break
        case 'fortuneOutput':
            personalWisdom.push(`You are having: '${wisdom[prop][optionID]}'.`)
            break
            case 'advice':
                personalWisdom.push(`You must: '${wisdom[prop][optionID]}'.`)
                break
                default:
                    personalWisdom.push('Not enough info.')
}
}
function formatWisdom(wisdom){
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}
formatWisdom(personalWisdom);