import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches /galeria and /galeria/$slug", () => {
    const router = createRouter({ routeTree });

    expect(router.matchRoutes("/galeria").at(-1)?.routeId).toBe("/galeria/");
    expect(router.matchRoutes("/galeria/campeonato-nacional-2026").at(-1)?.routeId).toBe(
      "/galeria/$slug",
    );
  });
});
