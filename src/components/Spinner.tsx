export const Spinner = () => {
  return(
    <div className="w-28 m-auto pt-40">
      <svg 
        version="1.1" 
        id="L9" 
        x="0px" 
        y="0px"
        viewBox="0 0 100 100" 
        enableBackground="new 0 0 0 0" 
      >
        <path 
          fill="#00f" 
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
        <animateTransform 
          attributeName="transform" 
          attributeType="XML" 
          type="rotate"
          dur="0.5s" 
          from="0 50 50"
          to="360 50 50" 
          repeatCount="indefinite" 
        />
        </path>
      </svg>
    </div>
  )
}