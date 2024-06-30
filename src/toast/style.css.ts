import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  top: 10,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 2000,
  pointerEvents: "none"
});

export const left = style({});
export const center = style({});
export const right = style({});

export const wrapper = style({
  paddingTop: 4,
  paddingBottom: 4,
  textAlign: "center",
  paddingLeft: 20,
  paddingRight: 20
});

export const show = style({});

export const wrap = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  opacity: 0,
  transition: "all 250ms cubic-bezier(.21,1.02,.73,1)",
  transform: "translateY(-8px)",
  selectors: {
    [`${show} &`]: {
      transform: "translateY(0)",
      opacity: 1
    }
  }
});

export const pcenter = style({
  justifyContent: "center"
});
export const pleft = style({
  justifyContent: "flex-start"
});
export const pright = style({
  justifyContent: "flex-end"
});

export const tsuccess = style({});
export const terror = style({});

export const content = style({
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: 6,
  boxShadow:
    "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
  backgroundColor: "#fff"
});

export const msg = style({});

export const icon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
  selectors: {
    [`${tsuccess} &`]: {
      color: "#52C41A"
    },
    [`${terror} &`]: {
      color: "#F5222D"
    }
  }
});
