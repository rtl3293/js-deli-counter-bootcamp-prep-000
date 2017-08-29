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

function currentLine(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      var name = line[i]
      var spot = i + 1
      var order = ``
      if (i < line.length - 1) {
        order = order + `${spot}. ${name}, `
      } else if (i === line.length - 1) {
        order = order + `${spot}. ${name}`
      }
    }
  } else {
    return 'The line is currently empty.'
  }
}
