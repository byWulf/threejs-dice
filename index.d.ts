/// <reference types="three"/>
/// <reference types="cannon"/>

    declare class MeshWithBody extends THREE.Mesh {
        body: CANNON.Body;
    }
    
    declare interface DiceValuePair {
        dice: DiceObject;
        value: number;
    }
    
    declare class DiceManagerClass {
        world: CANNON.World;
        diceBodyMaterial: CANNON.Material;
        floorBodyMaterial: CANNON.Material;
        barrierBodyMaterial: CANNON.Material;
    
        setWorld(world:CANNON.World): void;
    
        prepareValues(diceValues:DiceValuePair[]): void;
    }
    
    declare interface DiceOptions {
        size?: number;
        fontColor?: string|number;
        backColor?: string|number;
    }
    
    declare class DiceObject {
        constructor(options:DiceOptions);
        getObject(): MeshWithBody;
        updateMeshFromBody(): void;
        updateBodyFromMesh(): void;
    }
    
    export declare class DiceD4 extends DiceObject {}
    export declare class DiceD6 extends DiceObject {}
    export declare class DiceD8 extends DiceObject {}
    export declare class DiceD10 extends DiceObject {}
    export declare class DiceD12 extends DiceObject {}
    export declare class DiceD20 extends DiceObject {}
    
    export declare const DiceManager:DiceManagerClass;
