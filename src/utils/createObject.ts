const createInfoUserVideo = (ob) => {
  const data = {
    percentage: ob.percentage,
    stopped_at: ob.stopped_at,
    id: ob.x.id,
  };
  return data;
};

const createInfoLike = (ob) => {
  const value = ob === 'like' ? true : false;
  const like = value === true ? true : false;
  const dislike = value === false ? true : false;

  const data = {
    is_like: like,
    is_dislike: dislike,
    cant_action: false,
  };
  return data;
};

const createObjectVideo = (ob: any) => {
  const enable = ob.x.url === null ? false : true;
  const data = {
    id: ob.x.id,
    url: ob.x.url,
    title: ob.x.title,
    enabled: enable,
    total_percentage: ob.total,
    information_user_video: createInfoUserVideo(ob),
    information_like: createInfoLike(ob.likeUser),
  };
  return data;
};

export default createObjectVideo;
