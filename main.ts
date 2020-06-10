
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

enum LED_STATUS {
    //% block="关"
    OFF = 0,
    //% block="开"
    ON,
}
/**
 * 自定义图形块
 */
//% weight=100 color=#C0C0C0 icon="\uf46d"
namespace Board {

    /**
     * 控制LED灯
     * @param port ; eg: DigitalPin.P0
     * @param rx ; status: LED_STATUS.ON
    */
    //% block="控制 $port 口的LED灯 $status"
    export function Control_LED(port: DigitalPin, status: LED_STATUS): void {
        pins.digitalWritePin(port, status)
    }

}
