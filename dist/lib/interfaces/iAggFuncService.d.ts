// Type definitions for ag-grid v11.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { IAggFunc } from "../entities/colDef";
import { Column } from "../entities/column";
export interface IAggFuncService {
    addAggFuncs(aggFuncs: {
        [key: string]: IAggFunc;
    }): void;
    addAggFunc(key: string, aggFunc: IAggFunc): void;
    clear(): void;
    getDefaultAggFunc(column: Column): string;
}
