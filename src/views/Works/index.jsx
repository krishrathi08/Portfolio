import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='mk-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleExperience = (props) => {
    const { image, index } = props
    const side = getSide(index);
    return (
        <div className='mk-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`mk-projects-image-container mk-projects-image-container-${side}`}>
                            <WindowImage src={image} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ExperienceTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ExperienceTextSide = (props) => {
    const { label, title, description, techs, index, image } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`mk-projects-text-side mk-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='mk-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='mk-projects-text-title'>{title}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='mk-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`mk-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='mk-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const Works = ({ data: {
    heading,
    experiences
} }) => {
    return (
        <div className='mk-projects mk-works-alt-style'>
            <div className='container'>
                <div className='mk-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(experiences || []).map((exp, i) => (
                            <SingleExperience
                                key={i}
                                index={i}
                                {...exp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Works.propTypes = {}

export default Works