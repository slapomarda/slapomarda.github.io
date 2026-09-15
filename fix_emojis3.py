import re
with open('c:/Users/simol/slapomarda.github.io/orario/app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "teacherRow.textContent =" in line:
        lines[i] = "    teacherRow.textContent = ????? ;\n"
    elif "r.textContent = " in line and "??" in line:
        lines[i] = "    r.textContent = ?? ;\n"
    elif "room.textContent = lesson.room" in line:
        lines[i] = "  room.textContent = lesson.room ? ??  : '';\n"
    elif "teacher.textContent = lesson.teacher" in line or "teacher.textContent =" in line and "????" in line:
        pass
        
    if "r.textContent = ?? ;" in line:
        lines[i] = "  teacher.textContent = lesson.teacher ? ?????  : '';\n"

with open('c:/Users/simol/slapomarda.github.io/orario/app.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
