import React from 'react';
import style from './Post.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-solid-svg-icons/faHeart";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";


const FA_HEART = <FontAwesomeIcon icon={faHeart}/>;
const FA_EYE = <FontAwesomeIcon icon={faEye}/>;
const FA_COMMENT = <FontAwesomeIcon icon={faComment}/>;

const Post = (props) => {

    return (
        <div className={style.post}>
            <div>
                <h2>  {props.title}</h2>
            </div>

            <div>
                {props.message}
            </div>

            <div className={style.readMore}>
                <p>Читать далее...</p>
            </div>

            <div className={style.infoPanel}>
                <div>
                    <p>
                        <span>
                            {FA_HEART}{" "}{props.likesCount}
                        </span>
                        <span>
                            {FA_EYE} {props.likesCount}
                        </span>
                        <span>
                            {FA_COMMENT} {props.likesCount}
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <div>

                </div>
            </div>

        </div>
    )
};

export default Post;