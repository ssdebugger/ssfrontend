import { gsap } from 'gsap'

/**
 * A function which adds scrolltrigger animation to a element.
 * ---------------
 * @param {string} trigger - Main element to add scrollTrigger to.
 * @param {Object[]} animationElements - list array of elements we want to animate when in viewport.
 * @param {string} startPosition - when to active the scrollTrigger animation.
 * @requires ScrollTrigger plugin should be registered within the file.
 * @returns {gsap.core.Timeline} Main timeline where to which all animations inside the function are linked.
 */
export const ScrollTriggerTimeline = ({
    trigger,
    animationElements,
    startPosition,
}: {
    trigger: string
    animationElements?: Array<{
        name: string
        properties: gsap.TweenVars
        tween?: string
    }>
    startPosition?: string
}) => {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: startPosition,
        },
    })

    animationElements &&
        animationElements.forEach((element) =>
            timeline.from(
                element.name,
                { duration: 0.85, ...element.properties },
                element.tween
            )
        )

    return timeline
}
