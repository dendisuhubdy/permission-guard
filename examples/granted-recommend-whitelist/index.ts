import { guard, NET } from "../../mod.ts";

// You can pass both `Deno.PermissionDescriptor` or `Deno.PermissionName`
// to the guard. You will need to use a `Deno.PermissionDescriptor` if you
// wish to grant a scoped permission.
await guard(
  {
    granted: [NET],
    log: true,
    exitOnExtra: true,
    exitOnMissing: true,
  },
);

// If the guard doesn't exited, can now safely execute our code.
console.log("Code is now executing");
