import { SlideNavigation } from '../types';

declare function __VLS_template(): {
    prevArrow?(_: {
        currentSlideGroupIndex: number;
        slideGroupCount: number;
        disabled: boolean;
        onClick: () => void;
    }): any;
    nextArrow?(_: {
        currentSlideGroupIndex: number;
        slideGroupCount: number;
        disabled: boolean;
        onClick: () => void;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    currentSlideGroupIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    slideGroupCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: import('vue').PropType<SlideNavigation>;
        default: string;
    };
    accessibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    asNavFor: {
        type: ObjectConstructor;
        default: null;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: {
        type: NumberConstructor;
        default: number;
    };
    centerMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    centerPadding: {
        type: StringConstructor;
        default: string;
    };
    cssEase: {
        type: StringConstructor;
        default: string;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    edgeFriction: {
        type: NumberConstructor;
        default: number;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    ignorePrefersReducedMotion: {
        type: BooleanConstructor;
        default: boolean;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    infiniteLoopOnEdge: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialGroupIndex: {
        type: NumberConstructor;
        default: number;
    };
    lazyLoad: {
        type: StringConstructor;
        default: null;
    };
    nextArrowLabel: {
        type: StringConstructor;
        default: string;
    };
    pauseOnDotsHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    pauseOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    prevArrowLabel: {
        type: StringConstructor;
        default: string;
    };
    responsive: {
        type: import('vue').PropType<import('../types').Responsive[]>;
        default: never[];
    };
    responsiveBehavior: {
        type: import('vue').PropType<"mobile-first" | "desktop-first">;
        default: string;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    slidesPerGroup: {
        type: NumberConstructor;
        default: number;
    };
    groupsToScroll: {
        type: NumberConstructor;
        default: number;
    };
    groupsToShow: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMove: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchThreshold: {
        type: NumberConstructor;
        default: number;
    };
    unslick: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSSTransitions: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSSTransform: {
        type: BooleanConstructor;
        default: boolean;
    };
    variableWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
    waitForAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    widthDetection: {
        type: StringConstructor;
        default: import('../types').WidthDetection;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    next: (...args: any[]) => void;
    previous: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    currentSlideGroupIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    slideGroupCount: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: import('vue').PropType<SlideNavigation>;
        default: string;
    };
    accessibility: {
        type: BooleanConstructor;
        default: boolean;
    };
    adaptiveHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrows: {
        type: BooleanConstructor;
        default: boolean;
    };
    asNavFor: {
        type: ObjectConstructor;
        default: null;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplaySpeed: {
        type: NumberConstructor;
        default: number;
    };
    centerMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    centerPadding: {
        type: StringConstructor;
        default: string;
    };
    cssEase: {
        type: StringConstructor;
        default: string;
    };
    dots: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    edgeFriction: {
        type: NumberConstructor;
        default: number;
    };
    fade: {
        type: BooleanConstructor;
        default: boolean;
    };
    focusOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    ignorePrefersReducedMotion: {
        type: BooleanConstructor;
        default: boolean;
    };
    infinite: {
        type: BooleanConstructor;
        default: boolean;
    };
    infiniteLoopOnEdge: {
        type: BooleanConstructor;
        default: boolean;
    };
    initialGroupIndex: {
        type: NumberConstructor;
        default: number;
    };
    lazyLoad: {
        type: StringConstructor;
        default: null;
    };
    nextArrowLabel: {
        type: StringConstructor;
        default: string;
    };
    pauseOnDotsHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    pauseOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    prevArrowLabel: {
        type: StringConstructor;
        default: string;
    };
    responsive: {
        type: import('vue').PropType<import('../types').Responsive[]>;
        default: never[];
    };
    responsiveBehavior: {
        type: import('vue').PropType<"mobile-first" | "desktop-first">;
        default: string;
    };
    rtl: {
        type: BooleanConstructor;
        default: boolean;
    };
    slidesPerGroup: {
        type: NumberConstructor;
        default: number;
    };
    groupsToScroll: {
        type: NumberConstructor;
        default: number;
    };
    groupsToShow: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    swipe: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeToSlide: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMove: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchThreshold: {
        type: NumberConstructor;
        default: number;
    };
    unslick: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSSTransitions: {
        type: BooleanConstructor;
        default: boolean;
    };
    useCSSTransform: {
        type: BooleanConstructor;
        default: boolean;
    };
    variableWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    verticalSwiping: {
        type: BooleanConstructor;
        default: boolean;
    };
    waitForAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    widthDetection: {
        type: StringConstructor;
        default: import('../types').WidthDetection;
    };
}>> & Readonly<{
    onNext?: ((...args: any[]) => any) | undefined;
    onPrevious?: ((...args: any[]) => any) | undefined;
}>, {
    vertical: boolean;
    groupsToScroll: number;
    groupsToShow: number;
    slideGroupCount: number;
    currentSlideGroupIndex: number;
    lazyLoad: string;
    infinite: boolean;
    infiniteLoopOnEdge: boolean;
    centerMode: boolean;
    centerPadding: string;
    accessibility: boolean;
    adaptiveHeight: boolean;
    arrows: boolean;
    asNavFor: Record<string, any>;
    autoplay: boolean;
    autoplaySpeed: number;
    cssEase: string;
    dots: boolean;
    draggable: boolean;
    edgeFriction: number;
    fade: boolean;
    focusOnSelect: boolean;
    ignorePrefersReducedMotion: boolean;
    initialGroupIndex: number;
    nextArrowLabel: string;
    pauseOnDotsHover: boolean;
    pauseOnFocus: boolean;
    pauseOnHover: boolean;
    prevArrowLabel: string;
    responsiveBehavior: "mobile-first" | "desktop-first";
    responsive: import('../types').Responsive[];
    rtl: boolean;
    slidesPerGroup: number;
    speed: number;
    swipe: boolean;
    swipeToSlide: boolean;
    touchMove: boolean;
    touchThreshold: number;
    unslick: boolean;
    useCSSTransitions: boolean;
    useCSSTransform: boolean;
    variableWidth: boolean;
    verticalSwiping: boolean;
    waitForAnimate: boolean;
    widthDetection: string;
    type: SlideNavigation;
    disabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
