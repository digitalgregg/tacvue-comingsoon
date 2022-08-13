import classNames from "classnames";
import * as React from "react";

/**
 * The component is container which adds a gradient border effect to the component.
 *
 * @param props
 * className use className to add styles to the container when its not active
 * activeClassName use activeClassName to add styles to the container when its active
 * active to determine if the gradient should be visible or not - Eg. Button click container is active
 *
 *
 * The container does not add or remove any styles to the component it is just a container with
 * gradient background.
 *
 * DO NOT USE PADDING ON THIS COMPONENT
 */

export const GradientBorderContainer: React.FC<{
  active?: boolean;
  className?: string;
  borderRadius?: string; // In terms of Tailwinds Padding
  activeBackgroundColor?: string;
  passiveBackgroundColor?: string;
  children: any;
}> = ({
  children,
  active = true,
  className = "",
  borderRadius = "p-[2px]",
  activeBackgroundColor = "from-[#6396f9] to-[#00d1ff] bg-gradient-to-r",
  passiveBackgroundColor,
}) => (
  <div
    className={classNames(
      active ? activeBackgroundColor : passiveBackgroundColor,
      // "transition-all duration-300 ease-in-out",
      className,
      borderRadius,
      // activeBackgroundColor
    )}
  >
    {children}
  </div>
);
