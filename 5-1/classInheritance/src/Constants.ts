// game constants
export const STAGE_WIDTH:number = 800;
export const STAGE_HEIGHT:number = 500;
export const FRAME_RATE:number = 30;
// -------------------------- challenge solution
export const BOMB_SPEED:number = 5;
// ---------------------------------------------
export const CHOPPER_SPEED:number = 5;

export const ASSET_MANIFEST:Object[] = [
    {
        type:"json",
        src:"./lib/spritesheets/sprites.json",
        id:"sprites",
        data:0
    },
    {
        type:"image",
        src:"./lib/spritesheets/sprites.png",
        id:"sprites",
        data:0
    },
    {
        type:"sound",
        src:"./lib/sounds/bomb-explosion.ogg",
        id:"bomb-explosion",
        data:1
    },
    {
        type:"sound",
        src:"./lib/sounds/rocket-launch.ogg",
        id:"rocket-launch",
        data:1
    },
    {
        type:"sound",
        src:"./lib/sounds/bomb-released.ogg",
        id:"bomb-released",
        data:1
    },
    {
        type:"sound",
        src:"./lib/sounds/chopper-explosion.ogg",
        id:"chopper-explosion",
        data:1
    }
];