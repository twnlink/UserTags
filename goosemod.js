let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document.createElement("style");
      style.textContent = `@import "https://raw.githack.com/TheRealGWJosh/CustomUserTags/main/main/main.css"`;
      document.head.appendChild(style);
    },

    onRemove: async () => {
      style.remove();
    },
  },
};
