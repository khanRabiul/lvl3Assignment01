import { useDispatch, useSelector } from "react-redux";
import { incrementLike, incrementDislike } from "../../features/video/videoSlice";
import Like from "../../assets/like.svg";
import UnLike from "../../assets/unlike.svg";

export default function VideoLikeUnlike() {
    const dispatch = useDispatch();
    const { likes, dislikes } = useSelector((state) => state.video.video);

    const handleLike = () => {
        dispatch(incrementLike());
    };

    const handleDislike = () => {
        dispatch(incrementDislike());
    };

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <button onClick={handleLike} className="shrink-0">
                    <img className="w-5 block" src={Like} alt="Like" />
                </button>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <button onClick={handleDislike} className="shrink-0">
                    <img className="w-5 block" src={UnLike} alt="Unlike" />
                </button>
                <div className="text-sm leading-[1.7142857] text-slate-600">{dislikes}</div>
            </div>
        </div>
    );
}
