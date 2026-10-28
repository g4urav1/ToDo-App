import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    if (!env.API_LINK) {
        throw new Error("Missing API_LINK environment variable");
    }

    return {
        define: {
            "import.meta.env.API_LINK": JSON.stringify(env.API_LINK)
        }
    };
});
