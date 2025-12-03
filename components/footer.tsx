export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold">Jinghao Technology Co., Ltd</div>
          <p className="text-lg opacity-80">Specializing in rapid prototyping and CNC machining since 2016</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-70">
            <span>ISO 9001 Certified</span>
            <span>•</span>
            <span>IATF 16949 Certified</span>
            <span>•</span>
            <span>ISO 13485 Certified</span>
          </div>
          <div className="pt-8 border-t border-background/20">
            <p className="text-sm opacity-60">© 2024 Jinghao Technology Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
