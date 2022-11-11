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
      <Svg viewBox="0 0 20 20" {...props}>
        <path d="M14.2903 13.2042V3.58049C14.2903 2.98999 13.8115 2.51123 13.221 2.51123H3.5976C3.0071 2.51123 2.52832 2.98999 2.52832 3.58049V13.2042C2.52832 13.7942 3.0071 14.2735 3.5976 14.2735H13.221C13.8115 14.2735 14.2903 13.7942 14.2903 13.2042ZM12.1518 13.2042H4.66687C4.07637 13.2042 3.5976 12.7249 3.5976 12.1349V4.64976C3.5976 4.05926 4.07637 3.58049 4.66687 3.58049H12.1518C12.7423 3.58049 13.221 4.05924 13.221 4.64976V12.135C13.221 12.7249 12.7422 13.2042 12.1518 13.2042ZM16.4288 5.71904H15.3596V6.78831C15.95 6.78831 16.4288 7.26709 16.4288 7.85783V15.3428C16.4288 15.9327 15.95 16.412 15.3596 16.412H7.87466C7.28416 16.412 6.80538 15.9327 6.80538 15.3428H5.73611V16.412C5.73611 17.002 6.21488 17.4813 6.80538 17.4813H16.4288C17.0193 17.4813 17.4981 17.002 17.4981 16.412V6.78831C17.4981 6.19779 17.0193 5.71904 16.4288 5.71904Z" />
      </Svg>
    )
  },
})
