// GLSL version
#version 330 core

layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;
in VertexAttrib
{
vec3 Color;
}vertex[];

out vec3 Color;

void main()
{
    for (int i=0; i< 3; ++i)
    {
        gl_Position     = gl_in[i].gl_Position;

        Color           = vertex[i].Color;

        EmitVertex();
    }
    EndPrimitive();
}

