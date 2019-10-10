import React from "react";
import SeatPicker from "react-seat-picker";

export class BusSeatChart extends React.Component {
  state = {
    loading: false,
  };

  addSeatCallback = (row: any, number: any, id: any, cb: (arg0: any, arg1: any, arg2: string) => void) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        cb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = (row: string, number: any, id: any, cb: (arg0: any, arg1: any, arg2: string | null) => void) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);

        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";

        cb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1, isSelected: false, tooltip: "Available" },
        { id: 2, number: 2, isSelected: false, tooltip: "Available" },
        { id: 3, number: 3, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 4, number: 4, isSelected: false, tooltip: "Available" },
        { id: 5, number: 5, isSelected: false, tooltip: "Available" },
        { id: 6, number: 6, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 7, number: 7, isSelected: false, tooltip: "Available" },
        { id: 8, number: 8, isSelected: false, tooltip: "Available" },
        { id: 9, number: 9, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 10, number: 10, isSelected: false, tooltip: "Available" },
        { id: 11, number: 11, isSelected: false, tooltip: "Available" },
        { id: 12, number: 12, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 13, number: 13, isSelected: false, tooltip: "Available" },
        { id: 14, number: 14, isSelected: false, tooltip: "Available" },
        { id: 15, number: 15, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 16, number: 16, isSelected: false, tooltip: "Available" },
        { id: 17, number: 17, isSelected: false, tooltip: "Available" },
        { id: 18, number: 18, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 19, number: 19, isSelected: false, tooltip: "Available" },
        { id: 20, number: 20, isSelected: false, tooltip: "Available" },
        { id: 21, number: 21, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 22, number: 22, isSelected: false, tooltip: "Available" },
        { id: 23, number: 23, isSelected: false, tooltip: "Available" },
        { id: 24, number: 24, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 25, number: 25, isSelected: false, tooltip: "Available" },
        { id: 26, number: 26, isSelected: false, tooltip: "Available" },
        { id: 27, number: 27, isSelected: false, tooltip: "Available" },
      ],
      [
        { id: 28, number: 28, isSelected: false, tooltip: "Available" },
        { id: 29, number: 29, isSelected: false, tooltip: "Available" },
        { id: 30, number: 30, isSelected: false, tooltip: "Available" },
      ],
    ];
    const { loading } = this.state;
    return (
      <div>
        <div style={{ marginTop: "20px", left: "15px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}
