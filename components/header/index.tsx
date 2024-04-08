import { UserButton } from "@clerk/nextjs";

// 导出一个更具描述性的组件
export default function Header() {
    return (
        <header id="header-with-logo" className="w-full h-100 bg-yellow-300">
            <div className="flex items-center justify-between h-full w-full">
                {/* 添加 margin-left 以将 logo 向左移动 */}
                <img src="vercel.svg" alt="logo" className="h-12 w-12 ml-auto mr-12"/>
                <UserButton/>
            </div>
        </header>
    );
}