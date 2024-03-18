export async function getTvList(content) {
  const res = await fetch(`/api/video/list?s=${content}`);
  return await res.json();
}
export async function getVideoInfoById(id) {
  const res = await fetch(`/api/video/${id}`);
  return await res.json();
}
