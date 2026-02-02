export async function loadLocalData() {
  const matches = await fetch('data/matches.json').then(r => r.json())
  const standings = await fetch('data/standings.json').then(r => r.json())
  return { matches, standings }
}
