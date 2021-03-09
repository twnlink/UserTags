let style;

export default {
  goosemodHandlers: {
    onImport: async () => {
      style = document.createElement("style");
      style.textContent = `@import "https://raw.githack.com/Cr3atable/UserTags/master/basic.css"`;
      document.head.appendChild(style);
    },

    onRemove: async () => {
      style.remove();
    },
  },
};
