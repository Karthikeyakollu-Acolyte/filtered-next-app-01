"use client"
import React, { useEffect } from 'react';
import { FabricCanvas } from './FabricCanvas';
import { Layer, useCanvas } from '@/context/CanvasContext';
import { useSettings } from '@/context/SettingsContext';
import { Excalidraw } from '@excalidraw/excalidraw';
import ExcalidrawFabric from './excalidraw/ExcalidrawFabric';

export const CanvasLayer: React.FC<{
    rect: any;
    layer: Layer;
    layerIndex: number;
    pageIndex: number;
    saveLayerContent: any;
}> = ({ rect, layerIndex, pageIndex, saveLayerContent }) => {




    return (
        <div
            className="canvas-wrapper absolute"
            id={`canvas-wrapper-${pageIndex}-${layerIndex}`}
            style={{
                top: rect.top ,
                width: rect.width - 5,
                height: rect.height,
                zIndex: 10 + layerIndex,
            }}
        >
           
             <ExcalidrawFabric/>
           
        </div>
    )
};


 {/* <FabricCanvas
                rect={rect}
                index={layerIndex}
                pageIndex={pageIndex}
                isDrawing={true}
                saveLayerContent={(content) => {
                    saveLayerContent(layerIndex, pageIndex, content)
                    //  console.log("Saving the content: ",content)

                }

                }
                initialContent={layer.content[pageIndex] || {}}
            /> */}