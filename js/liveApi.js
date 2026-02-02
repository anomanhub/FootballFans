const API_KEY = 'ISI_API_KEY_LO'
const API_URL =
  'https://v3.football.api-sports.io/fixtures?date=2026-02-02&league=39&season=2025'

export async function loadLiveScores() {
  try {
    const res = await fetch(API_URL, {
      headers: { 'x-apisports-key': API_KEY }
    })
    const data = await res.json()
    return data.response
  } catch (e) {
    console.log('API gagal, fallback ke lokal')
    return []
  }
}
