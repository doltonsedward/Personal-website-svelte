<script defer>
  import { onMount, createEventDispatcher, afterUpdate } from "svelte";
  export let activeIn 
  
  const dispatch = createEventDispatcher()
  
  let clickEffect
  onMount(() => {
      const body = document.body;
      const menu = body.querySelector(".menu")
      const menuItems = menu.querySelectorAll(".menu__item")
      const menuBorder = menu.querySelector(".menu__border")
      let activeItem = menu.querySelector(".active")

      function clickItem(item) {
          menu.style.removeProperty("--timeOut")
          
          if (activeItem == item) return;
          if (activeItem) activeItem.classList.remove("active")
          
          item.classList.add("active")
          activeItem = item;
          offsetMenuBorder(activeItem, menuBorder)
      }
  
      function offsetMenuBorder(element, menuBorder) {
          const offsetActiveItem = element.getBoundingClientRect()
          const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px"
          menuBorder.style.transform = `translate3d(${left}, 0 , 0)`
      }

      clickEffect = clickItem
  
      offsetMenuBorder(activeItem, menuBorder)
  
      menuItems.forEach(item => {
          item.addEventListener("click", () => clickItem(item))
      })
  
      window.addEventListener("resize", () => {
          offsetMenuBorder(activeItem, menuBorder)
          menu.style.setProperty("--timeOut", "none")
      })
  })

  afterUpdate(() => {
    const menuItems = document.querySelectorAll(".menu__item")
    menuItems.forEach(item => {
        if (item.classList.contains(activeIn)) {
          clickEffect(item)
        } else if (item.classList.contains(activeIn.split(' ').join('-'))) {
          clickEffect(item)
        }
    })
  })
  </script>
  
  <nav class="mobile-nav menu">
    <menu class="menu">
      <button class="menu__item Home" class:active={activeIn === 'Home'} style="--bgColorItem: #ff8c00" on:click={()=> dispatch('navChange', 'Home')}>
          <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="384px"
          height="384px"
          >
          <path
              d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333	c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z"
          />
          <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" />
          </svg>
      </button>
  
      <button class="menu__item About-me" class:active={activeIn === 'About me'} style="--bgColorItem: #f54888" on:click={()=> dispatch('navChange', 'About me')}>
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z"
          />
        </svg>
      </button>
  
      <button class="menu__item Portfolio" class:active={activeIn === 'Portfolio'} style="--bgColorItem: #e0b115" on:click={()=> dispatch('navChange', 'Portfolio')}>
        <svg class="icon" viewBox="0 0 24 24">
          <path
            d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
              C3.9,4.4,4.4,3.9,5.1,3.9z"
          />
          <path d="M4.2,9.3h15.6" />
          <path d="M9.1,9.5v10.3" />
        </svg>
      </button>
  
      <button class="menu__item Contact" class:active={activeIn === 'Contact'} style="--bgColorItem: #65ddb7" on:click={()=> dispatch('navChange', 'Contact')}>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.59 40.14">
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                  stroke: white;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-width: 2px;
                }
              </style>
            </defs>
            <title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  class="cls-1"
                  d="M21.46,1C9.83,1,1,8.74,1,18.28a12.83,12.83,0,0,0,5.41,11h0A15.59,15.59,0,0,1,6,37.4a1.35,1.35,0,0,0,1.74,1.66l10.59-3.75a23.26,23.26,0,0,0,3.26.25c11.63,0,21-7.74,21-17.28S33.09,1,21.46,1Z"
                />
                <path class="cls-1" d="M18.15,35.31a23.69,23.69,0,0,1-6.8-2.44" />
                <circle cx="12.84" cy="18.87" r="2.37" />
                <circle cx="22.12" cy="18.87" r="2.37" />
                <circle cx="31.4" cy="18.87" r="2.37" />
              </g>
            </g>
          </svg>
      </button>
  
      <div class="menu__border"></div>
    </menu>
    <div class="svg-container">
      <svg viewBox="0 0 202.9 45.5">
        <clipPath
          id="menu"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.0049285362247413 0.021978021978022)"
        >
          <path
            d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z"
          />
        </clipPath>
      </svg>
    </div>
  </nav>

<style>
    .menu{
      width: 100%;
      position: fixed;
      bottom: 0;
      margin: 0;
      display: flex;
      font-size: 1.5em;
      padding: 0 2.85em;
      align-items: center;
      justify-content: center;
      background-color: var(--bgColorMenu);
      z-index: 9;
    }

    .menu__item {
      all: unset;
      flex-grow: 1;
      z-index: 100;
      display: flex;
      cursor: pointer;
      position: relative;
      border-radius: 50%;
      align-items: center;
      will-change: transform;
      justify-content: center;
      padding: 0.55em 0 0.85em;
      transition: transform var(--timeOut , var(--duration));
    }

    .menu__item::before {
      content: "";
      z-index: -1;
      width: 4.2em;
      height: 4.2em;
      border-radius: 50%;
      position: absolute;
      transform: scale(0);
      transition: background-color var(--duration), transform var(--duration);
    }


    .menu__item.active { transform: translate3d(0, -.8em , 0) }
    .menu__item.active .icon { animation: strok 1.5s reverse }
    .menu__item.active::before{
      transform: scale(1);
      background-color: var(--bgColorItem);
    }

    .icon{
      width: 2.6em;
      height: 2.6em;
      stroke: white;
      fill: transparent;
      stroke-width: 1pt;
      stroke-miterlimit: 10;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 400;
    }

    @keyframes strok {
      to { stroke-dashoffset: 400 }
    }

    .menu__border{
      left: 0;
      bottom: 99%;
      width: 10.9em;
      height: 2.4em;
      position: absolute;
      clip-path: url(#menu);
      will-change: transform;
      background-color: var(--bgColorMenu);
      transition: transform var(--timeOut , var(--duration));
    }

    .svg-container {
      width: 0;
      height: 0;
    }

    @media (min-width: 750px) {
      .menu {
        display: none;
      }
    }

    @media screen and (max-width: 50em) {
        .menu{
            font-size: .8em;
        }
    }
</style>