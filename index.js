function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  var place = katzDeliLine.length
  return `Welcome, ${newPerson}. You are number ${place} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var served = katzDeliLine.shift()
    return `Currently serving ${served}.`
  } else {
    return 'There is nobody waiting to be served.'
  }
}
