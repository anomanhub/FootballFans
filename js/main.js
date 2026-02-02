import { loadLocalData } from './localData.js'
import { loadLiveScores } from './liveApi.js'

const matchList = document.getElementById('matches')

function renderMatch(match) {
  const div = document.createElement('div')
  div.className = 'match'
  div.innerHTML = `
    <strong>${match.home}</strong>
    vs
    <strong>${match.away}</strong>
    <span>${match.score}</span>
  `
  matchList.appendChild(div)
}

async function init() {
  const { matches } = await loadLocalData()
  matches.forEach(renderMatch)

  const live = await loadLiveScores()
  live.forEach(l => {
    const found = matches.find(
      m =>
        m.home === l.teams.home.name &&
        m.away === l.teams.away.name
    )
    if (found) {
      found.score =
        l.goals.home + ' - ' + l.goals.away
    }
  })

  matchList.innerHTML = ''
  matches.forEach(renderMatch)
}

init()
