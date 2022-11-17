import { defineComponent } from 'vue'
import Svg from '../Svg.vue'
import { SvgProps } from '../types'

export default defineComponent({
  props: {
    ...SvgProps,
  },
  components: {
    Svg,
  },
  setup(props) {
    return () => (
      <Svg viewBox="0 0 27 26" {...props}>
        <path
          d="M13.5 2.6001C7.76588 2.6001 3.10001 7.26525 3.10001 13.0001C3.10001 18.7349 7.76516 23.4001 13.5 23.4001C19.2341 23.4001 23.9 18.7349 23.9 13.0001C23.9 7.26525 19.2349 2.6001 13.5 2.6001Z"
          fill="#CC1010"
        />
        <path
          d="M11.9968 7.04688C12.2677 6.85938 12.6609 6.69271 13.1765 6.54688C13.6921 6.39583 14.1817 6.32031 14.6453 6.32031C15.0359 6.32031 15.3536 6.38021 15.5984 6.5C15.5984 7.33854 15.5489 8.39062 15.45 9.65625C15.351 10.9167 15.213 12.4531 15.0359 14.2656C14.9265 14.4531 14.7546 14.6042 14.5203 14.7188C14.2911 14.8281 14.0463 14.8828 13.7859 14.8828C13.588 14.8828 13.3979 14.849 13.2156 14.7812C13.0333 14.7135 12.8744 14.612 12.739 14.4766L11.9968 7.04688ZM13.9031 15.8672C14.5906 15.8672 15.0906 16.0182 15.4031 16.3203C15.7208 16.6172 15.8796 16.9922 15.8796 17.4453C15.8796 17.7474 15.7833 18.0312 15.5906 18.2969C15.4031 18.5573 15.1557 18.7656 14.8484 18.9219C14.5463 19.0781 14.2312 19.1562 13.9031 19.1562C13.575 19.1562 13.2572 19.0781 12.95 18.9219C12.6479 18.7656 12.4005 18.5573 12.2078 18.2969C12.0203 18.0312 11.9265 17.7474 11.9265 17.4453C11.9265 16.9922 12.0828 16.6172 12.3953 16.3203C12.713 16.0182 13.2156 15.8672 13.9031 15.8672Z"
          fill="white"
        />
      </Svg>
    )
  },
})
