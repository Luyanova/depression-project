import { reactive, onMounted, onUnmounted } from "vue";

export default function useMousePosition() {
  const mousePosition = reactive({ x: 0, y: 0 });

  const updateMousePosition = (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", updateMousePosition);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", updateMousePosition);
  });

  return mousePosition;
}
