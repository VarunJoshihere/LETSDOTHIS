import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import style from "../style/bottomSheet.module.css";
import StartRoom from './bottom_sheets/StartRoom';
import newRoom from './bottom_sheets/NewRoom';
import NewRoom from './bottom_sheets/NewRoom';

export default function BottomSheet(props) {

    return (
        <SwipeableBottomSheet
            open={props.sheetVisible}
            onChange={() => {
                props.setsheetVisible(!props.sheetVisible);
                props.setItemsVisible(true);

            }}
            fullScreen={props.sheetTitle == 'room detail' ? true : false}
        >
            <div className={style.BottomSheetContainer}
                style={{ backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : ' ' }}

            >
                
            {/* <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setsheetVisible={(item) =>{
                props.setsheetVisible(item);
                props.setItemsVisible(true);
            }}/> */}

        {props.sheetTitle=='new room'?
        (
            <NewRoom
            cardDetail={props.cardDetail}            
            setsheetVisible={(item) =>{
                props.setsheetVisible(item);
                props.setItemsVisible(true);
            }}/>

        ): props.sheetTitle=='start room'?
        (
            <StartRoom
            setSheetCreateRoom={props.setSheetCreateRoom}
            setsheetVisible={(item) =>{
                props.setsheetVisible(item);
                props.setItemsVisible(true);
            }}/>
            
        ):
        (
            " "
        )
        }

            </div>
        </SwipeableBottomSheet>


    );

}