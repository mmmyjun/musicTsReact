export async function getTvList(content) {
  const res = await fetch(`/api/video/list?s=${content}`);
  return res.json();
}
export async function getVideoInfoById(id) {
  const res = await fetch(`/api/video/${id}`);
  return res.json();
}
